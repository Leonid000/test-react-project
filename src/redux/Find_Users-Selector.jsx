import {createSelector} from 'reselect'

const findUsersPage = (state) => {
    return state.findUsersPage
}
export const findUsersPageSelector = createSelector(findUsersPage, (userPage) => {
    return userPage
})

export const pageSize = (state) => {
    return state.findUsersPage.pageSize
}
export const totalUsersCount = (state) => {
    return state.findUsersPage.totalUsersCount
}

export const currentPage = (state) => {
    return state.findUsersPage.currentPage
}

export const isLoading = (state) => {
    return state.findUsersPage.isLoading
}
export const isClicked = (state) => {
    return state.findUsersPage.isClicked
}
