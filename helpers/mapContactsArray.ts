import {Contact} from '../interfaces/Contact';
import {LibraryContact} from '../interfaces/LibraryContact';

const mapContactsArray = (array: LibraryContact[]): Contact[] =>
  array.map(
    ({
      displayName,
      phoneNumbers,
      emailAddresses,
      thumbnailPath,
      recordID,
    }: LibraryContact) => ({
      name: displayName,
      phoneNumber: phoneNumbers?.[0]?.number,
      email: emailAddresses?.[0]?.email,
      image: thumbnailPath,
      id: recordID,
    }),
  );

export {mapContactsArray};
