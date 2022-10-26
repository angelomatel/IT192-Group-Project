export class Dog {
	id: number = 0
	name: string = ''
	gender: string = ''
	age: string = ''
	size: string = ''
	color: string = ''
	images: string = ''
	adjectives: string = ''
	story: string = ''
	hasOwner: boolean = false

	constructor(values: Object = {}) {
		Object.assign(this, values)
	}

	setId(id: number) {
		this.id = id
	}
}
