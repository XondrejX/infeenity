import { _mock } from 'src/_mock';

// TO GET THE USER FROM THE AUTHCONTEXT, YOU CAN USE

// CHANGE:
// import { useMockedUser } from 'src/hooks/use-mocked-user';
// const { user } = useMockedUser();

// TO:
// import { useAuthContext } from 'src/auth/hooks';
// const { user } = useAuthContext();

// ----------------------------------------------------------------------

export function useMockedUser() {
  const user = {
    id: '8864c717-587d-472a-929a-8e5f298024da-0',
    displayName: 'Daniel Ďurica',
    email: 'durica@infeenity.sk',
    password: 'infeenity123',
    photoURL: _mock.image.avatar(24),
    phoneNumber: '+421 123 456 789',
    country: 'Slovensko',
    address: '90210 Broadway Blvd',
    state: 'Slovensko',
    city: 'Bratislava',
    zipCode: '11111',
    about: 'Text',
    role: 'admin',
    isPublic: true,
  };

  return { user };
}
