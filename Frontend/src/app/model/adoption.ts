export class Adoption {
	adoption_id: number = 0
	dog_id: number = 0
	status: string = ''
	adopter_name: string = ''
	adopter_contact: string = ''
	adopter_email: string = ''
	adopter_address: string = ''
	adopter_reason: string = ''

	constructor(values: Object = {}) {
		Object.assign(this, values)
	}
}
