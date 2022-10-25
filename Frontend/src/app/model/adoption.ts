export class Adoption {
	adoption_id: Number = 0
	dog_id: Number = 0
	status: String = ''
	adopter_name: string = ''
	adopter_contact: string = ''
	adopter_email: string = ''
	adopter_address: string = ''

	constructor(values: Object = {}) {
		Object.assign(this, values)
	}
}
