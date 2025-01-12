export interface ReplaygainSettings {
  noclip: boolean;
  type: number;
  preamp: number;
}

export interface EqBandSetting {
  cutoff: number;
  q: number;
  gain: number;
}

export interface Settings {
  volume: number;
  balance: number;
  bass: number;
  treble: number;
  channelConfig: number;
  stereoWidth: number;
  bassCutoff: number;
  trebleCutoff: number;
  crossfade: number;
  crossfadeFadeInDelay: number;
  crossfadeFadeOutDelay: number;
  crossfadeFadeInDuration: number;
  crossfadeFadeOutDuration: number;
  crossfadeFadeOutMixmode: number;
  ReplaygainSettings: ReplaygainSettings;
  crossfeed: number;
  crossfeedDirectGain: number;
  crossfeedCrossGain: number;
  crossfeedHfAttenuation: number;
  crossfeedHfCutoff: number;
  eqEnabled: boolean;
  eqPrecut: number;
  eqBandSettings: EqBandSetting[];
  beep: number;
  keyclick: number;
  keyclickRepeats: number;
  ditheringEnabled: boolean;
  timestretchEnabled: boolean;
  partyMode: boolean;
  volumeType: number;
  playerName: string;
  musicDir: string;
  repeatMode: number;
  playlistShuffle: boolean;
}
