export interface InavItems {
    attributes: {
        name: string,
        route: string,
    }
}

export interface IMobileMenuModal {
    closeModal: () => void,
    isModalOpen: boolean;
    navItems: InavItems[]
}