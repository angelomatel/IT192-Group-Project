export class Adoption {
	adoption_id: Number = 0
	dog_id: Number = 0
	adopter_name: string = ''
	adopter_contact: string = ''
	adopter_email: string = ''
	adopter_address: string = ''
	adopter_reason: string = ''

	constructor(values: Object = {}) {
		Object.assign(this, values)
	}
}
