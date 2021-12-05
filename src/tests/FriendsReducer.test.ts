import { friendsAPI } from "../api/api";
import { followUserThunkCreator, friendsActions, friendsReducer } from "../redux/friends-reducer"
import { ResponseType, ResultCodesEnum } from "../types/APITypes/ApiTypes";
import { InitialStateFriendsType } from "../types/FriendsTypes/FriendsTypes"

let state: InitialStateFriendsType;

beforeEach(() => {
    state = {
        users: [
            { id: 0, name: 'Rus 0', followed: false, photos: { small: 'rus 0', large: 'rus 0' }, status: 'status 0' },
            { id: 1, name: 'Rus 1', followed: true, photos: { small: 'rus 1', large: 'rus 1' }, status: 'status 1' },
            { id: 2, name: 'Rus 2', followed: false, photos: { small: 'rus 2', large: 'rus 2' }, status: 'status 2' }
        ],
        pageSize: 10,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingProgress: []
    }
})

test('follow success', () => {
    const newState = friendsReducer(state, friendsActions.followAC(2))
    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[2].followed).toBeTruthy()
})
test('unfollow success', () => {
    const newState = friendsReducer(state, friendsActions.unfollowAC(1))
    expect(newState.users[1].followed).toBeFalsy()
    expect(newState.users[0].followed).toBeFalsy()
})

jest.mock("../api/api")

const friendsApiMock = friendsAPI as jest.Mocked<typeof friendsAPI>

const result: ResponseType = {
    data: {},
    resultCode: ResultCodesEnum.Success,
    messages: []
}

friendsApiMock.followUser.mockReturnValue(Promise.resolve(result))

test('thunk follow', async () => {
    let thunk = followUserThunkCreator(1)
    const dispatchMock = jest.fn()
    const getStateMock = jest.fn()

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, friendsActions.toggleFollowingProgressAC(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, friendsActions.followAC(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, friendsActions.toggleFollowingProgressAC(false, 1))
})