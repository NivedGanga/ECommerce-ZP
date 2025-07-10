import { User, IdTokenResult } from "firebase/auth";

export const mockFirebaseUser: User = {
    uid: "1234567890",
    email: "testuser@example.com",
    emailVerified: true,
    displayName: "Test User",
    photoURL: "https://example.com/photo.jpg",
    isAnonymous: false,
    phoneNumber: "+1234567890",
    providerId: "firebase",
    providerData: [
        {
            uid: "1234567890",
            displayName: "Test User",
            email: "testuser@example.com",
            photoURL: "https://example.com/photo.jpg",
            providerId: "password",
            phoneNumber: "+1234567890",
        },
    ],
    metadata: {
        creationTime: "Mon, 01 Jan 2024 00:00:00 GMT",
        lastSignInTime: "Mon, 10 Jul 2025 12:00:00 GMT",
    },

    getIdToken: jest.fn(() => Promise.resolve("mock-id-token")),
    getIdTokenResult: jest.fn(() =>
        Promise.resolve({
            token: "mock-id-token",
            expirationTime: "9999-12-31T23:59:59Z",
            authTime: "2025-07-10T12:00:00Z",
            issuedAtTime: "2025-07-10T12:00:00Z",
            signInProvider: "password",
            claims: {},
        } as IdTokenResult)
    ),
    delete: jest.fn(() => Promise.resolve()),
    reload: jest.fn(() => Promise.resolve()),
    toJSON: () => ({
        uid: "1234567890",
        email: "testuser@example.com",
        displayName: "Test User",
        photoURL: "https://example.com/photo.jpg",
    }),
    refreshToken: "mock-refresh-token",
    tenantId: null,
};
