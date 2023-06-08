interface LibraryContact {
  displayName: string;
  familyName: string;
  phoneNumbers: {
    label: string;
    number: string;
  }[];
  emailAddresses: {
    label: string;
    email: string;
  }[];
  thumbnailPath?: string;
}

export type {LibraryContact};
