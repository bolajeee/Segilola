import { create } from "zustand";

export const useUserStore = create((set) => ({
  users: [],
  setUsers: (users) => set({ users }),

  createUser: async (newUser) => {
    if (!newUser.name || !newUser.email || !newUser.password) {
      return { success: false, message: "please fill in all required fields" };
    }

    try {
      const res = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      if (res.ok) {
        const data = await res.json();
        set((state) => ({ users: [...state.users, data.data] }));
        return { success: true, message: "Account created successfully" };
      } else if (res.status === 500) {
        return { success: false, message: "internal server error" };
      } else {
        return { success: false, message: "error creating Account" };
      }
    } catch (error) {
      console.error(error);
      return { success: false, message: "error creating Account" };
    }
  },

  fetchUsers: async () => {
    try {
      const res = await fetch("http://localhost:5000/api/users");
      const data = await res.json();
      set({ users: data.data });
    } catch (error) {
      console.error(error);
    }
  },
}));
