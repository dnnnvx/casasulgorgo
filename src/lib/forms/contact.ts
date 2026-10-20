/** Who is writing to us, so we know how they would like to help. */
export const roles = ['public', 'association', 'business', 'volunteer', 'other'] as const
export type Role = (typeof roles)[number]

export const isRole = (value: string): value is Role => (roles as readonly string[]).includes(value)

/** Length limits shared by the form fields and the server check. */
export const limits = {
	name: 100,
	email: 200,
	message: { min: 10, max: 5000 }
} as const
