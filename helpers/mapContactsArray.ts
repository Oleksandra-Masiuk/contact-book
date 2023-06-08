import {Contact} from '../components/ContactCard';
import {LibraryContact} from '../interfaces/LibraryContact';

const mapContactsArray = (array: LibraryContact[]): Contact[] =>
  array.map(
    ({
      displayName,
      phoneNumbers,
      emailAddresses,
      thumbnailPath,
    }: LibraryContact) => ({
      name: displayName,
      phoneNumber: phoneNumbers?.[0]?.number,
      email: emailAddresses?.[0]?.email,
      image: thumbnailPath,
    }),
  );

export {mapContactsArray};
