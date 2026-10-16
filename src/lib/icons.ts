import ArrowLeft from '@tabler/icons-svelte-runes/icons/arrow-left'
import ArrowRight from '@tabler/icons-svelte-runes/icons/arrow-right'
import Backpack from '@tabler/icons-svelte-runes/icons/backpack'
import Ban from '@tabler/icons-svelte-runes/icons/ban'
import Basket from '@tabler/icons-svelte-runes/icons/basket'
import Bike from '@tabler/icons-svelte-runes/icons/bike'
import Binoculars from '@tabler/icons-svelte-runes/icons/binoculars'
import BrightnessHalf from '@tabler/icons-svelte-runes/icons/brightness-half'
import BuildingCommunity from '@tabler/icons-svelte-runes/icons/building-community'
import Calendar from '@tabler/icons-svelte-runes/icons/calendar'
import Car from '@tabler/icons-svelte-runes/icons/car'
import Check from '@tabler/icons-svelte-runes/icons/check'
import Clock from '@tabler/icons-svelte-runes/icons/clock'
import Droplet from '@tabler/icons-svelte-runes/icons/droplet'
import ExternalLink from '@tabler/icons-svelte-runes/icons/external-link'
import Eye from '@tabler/icons-svelte-runes/icons/eye'
import Fish from '@tabler/icons-svelte-runes/icons/fish'
import Flower from '@tabler/icons-svelte-runes/icons/flower'
import HeartHandshake from '@tabler/icons-svelte-runes/icons/heart-handshake'
import InfoCircle from '@tabler/icons-svelte-runes/icons/info-circle'
import Leaf from '@tabler/icons-svelte-runes/icons/leaf'
import Mail from '@tabler/icons-svelte-runes/icons/mail'
import MapPin from '@tabler/icons-svelte-runes/icons/map-pin'
import Menu2 from '@tabler/icons-svelte-runes/icons/menu-2'
import Moon from '@tabler/icons-svelte-runes/icons/moon'
import Parking from '@tabler/icons-svelte-runes/icons/parking'
import Paw from '@tabler/icons-svelte-runes/icons/paw'
import PicnicTable from '@tabler/icons-svelte-runes/icons/picnic-table'
import Recycle from '@tabler/icons-svelte-runes/icons/recycle'
import Route from '@tabler/icons-svelte-runes/icons/route'
import School from '@tabler/icons-svelte-runes/icons/school'
import Seedling from '@tabler/icons-svelte-runes/icons/seedling'
import ShieldCheck from '@tabler/icons-svelte-runes/icons/shield-check'
import Sun from '@tabler/icons-svelte-runes/icons/sun'
import Sunrise from '@tabler/icons-svelte-runes/icons/sunrise'
import Sunset from '@tabler/icons-svelte-runes/icons/sunset'
import Train from '@tabler/icons-svelte-runes/icons/train'
import Trash from '@tabler/icons-svelte-runes/icons/trash'
import Trees from '@tabler/icons-svelte-runes/icons/trees'
import Users from '@tabler/icons-svelte-runes/icons/users'
import VolumeOff from '@tabler/icons-svelte-runes/icons/volume-off'
import Walk from '@tabler/icons-svelte-runes/icons/walk'
import World from '@tabler/icons-svelte-runes/icons/world'
import X from '@tabler/icons-svelte-runes/icons/x'
import type { Component } from 'svelte'

/** Tabler outline icons (tabler.io/icons), imported one by one so only these are bundled. */
export const icons = {
	arrowRight: ArrowRight,
	arrowLeft: ArrowLeft,
	leaf: Leaf,
	paw: Paw,
	flower: Flower,
	pin: MapPin,
	clock: Clock,
	sun: Sun,
	auto: BrightnessHalf,
	moon: Moon,
	dawn: Sunrise,
	dusk: Sunset,
	car: Car,
	bike: Bike,
	train: Train,
	walk: Walk,
	binoculars: Binoculars,
	route: Route,
	quiet: VolumeOff,
	ban: Ban,
	fish: Fish,
	trash: Trash,
	droplet: Droplet,
	backpack: Backpack,
	info: InfoCircle,
	calendar: Calendar,
	globe: World,
	menu: Menu2,
	close: X,
	check: Check,
	parking: Parking,
	table: PicnicTable,
	basket: Basket,
	external: ExternalLink,
	mail: Mail,
	eye: Eye,
	handshake: HeartHandshake,
	community: BuildingCommunity,
	recycle: Recycle,
	school: School,
	seedling: Seedling,
	shield: ShieldCheck,
	trees: Trees,
	users: Users
} satisfies Record<string, Component<Record<string, unknown>>>

export type IconName = keyof typeof icons
