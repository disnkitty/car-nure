import IconPeople from './IconPeople';
import IconSquare from './IconSquare';
import IconProjector from './IconProjector';
import IconWiFi from './IconWiFi';
import IconComputer from './IconComputer';
import IconBattery from './IconBattery';

export const carFeatures = [
  { key: 'seatsCount', label: (val) => `${val} seats`, icon: IconPeople },
  { key: 'year', label: (val) => `${val}`, icon: IconSquare },
  { key: 'hasGPS', label: () => 'GPS', icon: IconProjector },
  { key: 'premiumAudio', label: () => 'Premium Audio', icon: IconComputer },
  { key: 'airConditioning', label: () => 'Air Conditioning', icon: IconWiFi },
  { key: 'isElectric', label: () => 'Electric', icon: IconBattery },
  { key: 'hasCarPlay', label: () => 'CarPlay', icon: IconBattery },
];
