export type ROLE = 'ADMIN' | 'CUSTOMER'

export class User {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        private role: ROLE 
    ) {}

    getRole() {
        return this.role;
    }

    setRole(role:ROLE) {
        this.role = role;
    }
}