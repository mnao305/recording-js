export default class RecordingJs {
  isRecording: boolean
  audioContext: null | AudioContext
  audioSampleRate: null | number
  audioData: any[]
  bufferSize: number
  scriptProcessor: null | ScriptProcessorNode

  constructor() {
    console.log('Test')
    this.isRecording = false
    this.audioContext = null
    this.audioSampleRate = null
    this.scriptProcessor = null
    this.audioData = []
    this.bufferSize = 1024
  }

  /**
   * Start recording
   */
  public async start() {
    console.log('よーいスタート！')

    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    })
    console.log(stream)

    // this.stream(stream)
  }

  /**
   * Stop recording
   */
  public stop() {}

  /**
   * stream
   */
  // private stream(stream: MediaStream) {
  //   const onAudioProcess = (e: AudioProcessingEvent) => {
  //     var input = e.inputBuffer.getChannelData(0)
  //     var bufferData = new Float32Array(this.bufferSize)
  //     for (var i = 0; i < this.bufferSize; i++) {
  //       bufferData[i] = input[i]
  //     }
  //     this.audioData.push(bufferData)
  //   }
  //   this.audioContext = new window.AudioContext()
  //   this.audioSampleRate = this.audioContext.sampleRate
  //   console.log(this.audioSampleRate)
  //   this.scriptProcessor = this.audioContext.createScriptProcessor(
  //     this.bufferSize,
  //     1,
  //     1
  //   )
  //   const mediastreamsource = this.audioContext.createMediaStreamSource(stream)
  //   mediastreamsource.connect(this.scriptProcessor)
  //   this.scriptProcessor.onaudioprocess = onAudioProcess
  //   this.scriptProcessor.connect(this.audioContext.destination)

  //   console.log('record start?')

  //   // when time passed without pushing the stop button
  //   //     setTimeout(function () {
  //   //       console.log("10 sec");
  //   //       if (stopButton.disabled == false) {
  //   //         saveAudio();
  //   //         console.log("saved audio");
  //   //       }
  //   //     }, 10000);
  // }
}
