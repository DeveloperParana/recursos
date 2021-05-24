import {
  getStartButton,
  getRecordButton,
  getPlayButton,
  getDownloadButton,
} from '../support/app.po'

describe('recorder', () => {
  beforeEach(() => cy.visit('/'))

  it('should display start camera', () => {
    getStartButton().contains('Start camera')
  })
  it('should display start recording', () => {
    getRecordButton().contains('Start Recording')
  })
  it('should display play', () => {
    getPlayButton().contains('Play')
  })
  it('should display download', () => {
    getDownloadButton().contains('Download')
  })

  it('should start camera', () => {
    getStartButton().click()
  })

  it('should mute', () => {
    cy.get('input').click()
  })

  it('should start recording and play', () => {
    getStartButton().click()
    getRecordButton().click()
    getRecordButton().click()
    // cy.get('input').click()
    getPlayButton().click()
  })
})
