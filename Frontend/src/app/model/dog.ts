export class Dog {
	id: Number = 0
	name: string = ''
	gender: string = ''
	age: string = ''
	size: string = ''
	color: string = ''
	images: Blob[] = []
	adjectives: string = ''
	story: string = ''
	hasOwner: boolean = false

	constructor(values: Object = {}) {
		Object.assign(this, values)
	}

	setId(id: Number) {
		this.id = id
	}
}
