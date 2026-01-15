export type Mods = Record<string, boolean>;

export function classNames(mainCls: string, mods: Mods = {}, extraClasses: string[] = []): string {
	return [
		mainCls,
		...Object.entries(mods)
			.filter(([_, value]) => Boolean(value))
			.map(([className]) => className),
		...extraClasses.filter(Boolean)
	].join(' ')
}