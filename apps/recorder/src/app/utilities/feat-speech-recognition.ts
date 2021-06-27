export const FeatSpeechRecognition = ((window as any).SpeechRecognition ||
  (window as any).webkitSpeechRecognition) as typeof SpeechRecognition

export const FeatSpeechGrammarList = ((window as any).SpeechGrammarList ||
  (window as any).webkitSpeechGrammarList) as typeof SpeechGrammarList

export const FeatSpeechRecognitionEvent = ((window as any)
  .SpeechRecognitionEvent ||
  (window as any).webkitSpeechRecognitionEvent) as typeof SpeechRecognitionEvent
