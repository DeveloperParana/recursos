export const getGreeting = () => cy.get('devpr-heading')

export const getRecorderVideo = () => cy.get<HTMLVideoElement>('video#recorder')
export const getRecordedVideo = () => cy.get<HTMLVideoElement>('video#recorded')

export const getPlayButton = () => cy.get<HTMLButtonElement>('button#play')
export const getStartButton = () => cy.get<HTMLButtonElement>('button#start')
export const getRecordButton = () => cy.get<HTMLButtonElement>('button#record')
export const getDownloadButton = () =>
  cy.get<HTMLButtonElement>('button#download')
