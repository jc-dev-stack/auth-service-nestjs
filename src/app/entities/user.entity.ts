export interface PropsUserEntity {
    id?: number
    name: string
    login: string
    password: string
}

export class User {
    private props: PropsUserEntity

    constructor(props: PropsUserEntity) {
        this.props = props
    }

    public get id(): number {
        return this.props.id
    }

    public set name(name: string) {
        this.props.name = name
    }
    public get name(): string {
        return this.props.name
    }

    public set login(login: string) {
        this.props.login = login
    }
    public get login(): string {
        return this.props.login
    }

    public set password(password: string) {
        this.props.password = password
    }
    public get password(): string {
        return this.props.password
    }
}

