import {
  TruckIcon,
  DevicePhoneMobileIcon,
  RectangleStackIcon,
  BoltIcon,
  CodeBracketIcon,
  BriefcaseIcon,
  SparklesIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
  ChartBarIcon,
  CogIcon,
  PaintBrushIcon,
  ArrowTrendingUpIcon,
  UserIcon,
  MagnifyingGlassIcon,
  ClockIcon,
  FaceSmileIcon,
  TrophyIcon,
  TicketIcon,
  ChatBubbleLeftRightIcon,
  HomeModernIcon,
} from '@heroicons/react/24/outline';

const iconMap = {
  TruckIcon,
  DevicePhoneMobileIcon,
  RectangleStackIcon,
  BoltIcon,
  CodeBracketIcon,
  BriefcaseIcon,
  SparklesIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
  ChartBarIcon,
  CogIcon,
  PaintBrushIcon,
  ArrowTrendingUpIcon,
  UserIcon,
  MagnifyingGlassIcon,
  ClockIcon,
  FaceSmileIcon,
  TrophyIcon,
  TicketIcon,
  ChatBubbleLeftRightIcon,
  HomeModernIcon,
};

export function getIcon(name) {
  return iconMap[name] || null;
}

export default iconMap;
