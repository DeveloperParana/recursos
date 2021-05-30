import * as detectNewline from 'detect-newline'
import { safeLoad } from 'js-yaml'

/**
 * Configuration that can be supplied by the user
 */
export interface MarkdownParserConfig {
  windows: boolean /** Specify whether to treat the string as though from a windows platform */
}

export interface AnyMap {
  [x: string]: any
}

export interface MarkdownData {
  metadata: AnyMap
  content: string
}

/**
 * Internal Operation Configurations
 */
interface InternalConfig extends MarkdownParserConfig {
  source: string /** A string containing the markdown */
  isWin(): boolean
}

/**
 * The configuration to be used for operation
 */
const config: InternalConfig = {
  source: '',
  windows: false,
  // infer the platform type by the eol present in the source string
  isWin: () => {
    const newLine = detectNewline(config.source)
    return config.windows || (!!newLine && newLine.match(/\r\n/) !== null)
  },
}

Object.seal(config)

const METADATA_START = () => (config.isWin() ? /^---\r\n/ : /^---\n/)
const METADATA_END = () => (config.isWin() ? /\r\n---\r\n/ : /\n---\n/)
const METADATA_FILE_END = () => (config.isWin() ? /\r\n---$/ : /\n---$/)
const JOIN_SEPARATOR = () => (config.isWin() ? '\r\n---\r\n' : '\n---\n')

/**
 * Check if the provided array has only one element that ends with METADATA_FILE_END.
 * If so, the source is metadata only with no content. The function cleans the metadata and adds an empty content element to the array.
 *
 * @param {Array}
 * @returns {Array}
 */
const checkMetadataOnly = (src: string[]) => {
  if (src.length === 1 && src[0].match(METADATA_FILE_END()) !== null) {
    return [src[0].replace(METADATA_FILE_END(), ''), '']
  }
  return src
}

/**
 * Split a string with the METADATA_END separator if it starts with METADATA_START.
 * Otherwise it creates an array containing the source string provided.
 *
 * @param {string} Source string to split.
 * @returns {Array}
 */
const splitSource = (src: string) => {
  if (src.match(METADATA_START()) !== null) {
    return checkMetadataOnly(src.split(METADATA_END()))
  }
  return [src]
}

/**
 * If source array has more than one value, it cleans (remove METADATA_START() and trim) and returns the first one.
 * Otherwise it returns null.
 *
 * @param {string[]} src
 * @returns {string|null}
 */
const cleanMetadata = (src: string[]) => {
  if (src.length >= 1) {
    return src[0].replace(METADATA_START(), '').trim()
  }
  return ''
}

/**
 * If the supplied value is nil, it returns an empty object, otherwise it returns the value itself.
 *
 * @param {string} src
 * @returns {string | object}
 */
const emptyObjectIfNil = (src: string) => (src.length === 0 ? {} : src)

/**
 * Join the elements of the array except the first one (metadata).
 * If there's only one element (no metadata), it returns it.
 *
 * @param {string[]} srcLines
 * @returns {string}
 */
const joinContent = (srcLines: string[]) => {
  if (srcLines.length > 1) {
    return srcLines.slice(1, srcLines.length).join(JOIN_SEPARATOR())
  }
  return srcLines.join('')
}

/**
 * Validate incoming input.
 *
 * @param {string} src Document source to parse.
 * @param {MarkdownParserConfig} config Operation configuration.
 */

const validateInput = (src: string, config: MarkdownParserConfig) => {
  if (typeof src !== 'string') {
    throw new TypeError('Source parameter (src) must be a string.')
  }

  if (Object.keys(config).length > 0 && typeof config.windows !== 'boolean') {
    throw new TypeError('Configuration property (windows) must be a boolean.')
  }
}

/**
 * Parse a markdown document (src) looking for metadata in YAML format.
 * In order to be parsed, metadata must be placed at the beginning of the document between two triple dashes.
 * Example:
 * ---
 * title: Lorem ipsum
 * author: Marcus Antonius
 * keywords: latin, ipsum
 * ---
 *
 * NB: setting windows to true in configuration prop will override the ability
 * to infer the type from the document (src)
 *
 * @param {string} src Document source to parse.
 * @param {MarkdownParserConfig} config Operation configuration.
 * @returns {MarkdownData}
 * @throws {TypeError} src must be a string.
 * @throws {YAMLException} Error on YAML metadata parsing.
 */
export const parse = (
  src: string,
  userConfig: MarkdownParserConfig = config
): MarkdownData => {
  validateInput(src, userConfig)

  config.source = src.trim()

  config.windows = userConfig.windows

  const splittedSource = splitSource(config.source)

  const cleanedMetadata = cleanMetadata(splittedSource)
  const parsedYaml = safeLoad(cleanedMetadata)
  const metaData = emptyObjectIfNil(parsedYaml)

  const content = joinContent(splittedSource)

  return {
    metadata: metaData,
    content: content,
  }
}

export default parse
