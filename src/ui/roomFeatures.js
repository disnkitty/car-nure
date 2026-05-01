import IconPeople from './IconPeople';
import IconSquare from './IconSquare';
import IconProjector from './IconProjector';
import IconWiFi from './IconWifi';
import IconComputer from './IconComputer';
import IconBattery from './IconBattery';

export const roomFeatures = [
  { key: 'peoples', label: (val) => `${val} people`, icon: IconPeople },
  { key: 'squareMeters', label: (val) => `${val}m2`, icon: IconSquare },
  { key: 'projector', label: () => 'Projector', icon: IconProjector },
  { key: 'soundSystem', label: () => 'Sound System', icon: IconComputer },
  { key: 'wifi', label: () => 'WiFi', icon: IconWiFi },
  { key: 'powerSocket', label: () => 'Power Socket', icon: IconBattery },
];
