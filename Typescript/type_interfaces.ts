interface Address {
  state: string;
  zip: number | string;
}

interface UserInterface extends Address {
  id: number;
  name: string;
  email: string;
  city?: string;
}
const user: UserInterface = {
  id: 100,
  name: "Sam",
  email: "sam@gmail.com",
  state: "Karanatak",
  zip: "560066",
};
