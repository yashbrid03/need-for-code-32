import { createStore } from "vuex";
import { auth, db } from "../firebase/config";
import { ref, onValue, set, get, child, update } from "firebase/database";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import router from "@/router";

const store = createStore({
  state: {
    user: null,
    cname: null,
    type: null,
    waitinglist: null,
    approvedlist: null,
    rejectedlist: null,
    pwaitinglist: null,
    papprovedlist: null,
    prejectedlist: null,
    pwaitinglist2: null,
    papprovedlist2: null,
    prejectedlist2: null,
    tapprovedlist: null,
    activeevelist1: null,
    activeevelist2: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setCname(state, payload) {
      state.cname = payload;
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload;
    },
    setType(state, payload) {
      state.type = payload;
      console.log(state.type);
    },
    setWaitingList(state, payload) {
      state.waitinglist = payload;
    },
    setApprovedList(state, payload) {
      state.approvedlist = payload;
    },
    setRejectedList(state, payload) {
      state.rejectedlist = payload;
    },
    setPWaitingList(state, payload) {
      state.pwaitinglist = payload;
    },
    setPApprovedList(state, payload) {
      state.papprovedlist = payload;
    },
    setPRejectedList(state, payload) {
      state.prejectedlist = payload;
    },
    setPWaitingList2(state, payload) {
      state.pwaitinglist2 = payload;
    },
    setPApprovedList2(state, payload) {
      state.papprovedlist2 = payload;
    },
    setPRejectedList2(state, payload) {
      state.prejectedlist2 = payload;
    },
    setTApprovedList(state, payload) {
      state.tapprovedlist = payload;
    },
    setActiveevelist1(state, payload) {
      state.activeevelist1 = payload;
    },
    setActiveevelist2(state, payload) {
      state.activeevelist2 = payload;
    },
  },
  actions: {
    async login(context, { email, password }) {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res) {
        context.commit("setUser", res.user);
        const info = ref(db, "users/" + this.state.user.uid);
        onValue(info, (snapshot) => {
          const data = snapshot.val();
          context.commit("setCname", data.c_name);
        });
      } else {
        throw new Error("could not complete login");
      }
    },
    async type(context) {
      const info = ref(db, "users/" + this.state.user.uid);
      onValue(info, (snapshot) => {
        const data = snapshot.val();
        context.commit("setType", data.type);
        if (data.type === "committee") {
          router.push("/committee");
        } else if (data.type === "principal") {
          router.push("/principal");
        }
      });
    },
    async logout(context) {
      await signOut(auth);
      context.commit("setUser", null);
      context.commit("setType", null);
    },
    async addeve(context, { eventname, eventdesc, eventtime, eventdate }) {
      var c_name;
      const starCountRef = ref(db, "users/" + this.state.user.uid);
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        c_name = data.c_name;
      });
      set(
        ref(db, "users/" + this.state.user.uid + "/events/" + eventname + "/"),
        {
          c_name: c_name,
          name: eventname,
          date: eventdate,
          desc: eventdesc,
          status: "waiting",
          time: eventtime,
        }
      );
      const info = ref(db, "users/" + this.state.user.uid);

      onValue(info, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
      });
    },
    async geteventlist(context) {
      const starCountRef = ref(db, "users/" + this.state.user.uid + "/events/");
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        var list1 = [];
        var list2 = [];
        var list3 = [];
        for (const ele in data) {
          const obj1 = data[ele];
          console.log(obj1.status);
          if (obj1.status === "waiting") {
            list1.push(obj1);
          } else if (obj1.status === "approved") {
            list2.push(obj1);
          } else {
            list3.push(obj1);
          }
        }
        context.commit("setWaitingList", list1);
        context.commit("setApprovedList", list2);
        context.commit("setRejectedList", list3);
      });
      if (this.state.user.uid === "IJoAj50XXvQlPDA7irZHUu2Kz0W2") {
        const starCountRef2 = ref(
          db,
          "users/TgyYtVBu8NYz2CKjHZYwfFyvktV2/events/"
        );
        onValue(starCountRef2, (snapshot) => {
          const data = snapshot.val();
          var list1 = [];
          for (const ele in data) {
            const obj1 = data[ele];
            console.log(obj1.status);
            if (obj1.status === "approved") {
              list1.push(obj1);
            }
          }
          context.commit("setTApprovedList", list1);
        });
      } else {
        const starCountRef2 = ref(
          db,
          "users/IJoAj50XXvQlPDA7irZHUu2Kz0W2/events/"
        );
        onValue(starCountRef2, (snapshot) => {
          const data = snapshot.val();
          var list1 = [];
          for (const ele in data) {
            const obj1 = data[ele];
            console.log(obj1.status);
            if (obj1.status === "approved") {
              list1.push(obj1);
            }
          }
          context.commit("setTApprovedList", list1);
        });
      }
    },
    async geteventlistprincipal(context) {
      const starCountRef = ref(
        db,
        "/users/IJoAj50XXvQlPDA7irZHUu2Kz0W2/events"
      );
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        var list1 = [];
        var list2 = [];
        var list3 = [];
        for (const ele in data) {
          const obj1 = data[ele];
          console.log(obj1.status);
          if (obj1.status === "waiting") list1.push(obj1);
          else if (obj1.status === "approved") {
            list2.push(obj1);
          } else {
            list3.push(obj1);
          }
        }
        context.commit("setPWaitingList", list1);
        context.commit("setPApprovedList", list2);
        context.commit("setPRejectedList", list3);
      });
      const starCountRef2 = ref(
        db,
        "/users/TgyYtVBu8NYz2CKjHZYwfFyvktV2/events"
      );
      onValue(starCountRef2, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        var list1 = [];
        var list2 = [];
        var list3 = [];
        for (const ele in data) {
          const obj1 = data[ele];
          console.log(obj1.status);
          if (obj1.status === "waiting") list1.push(obj1);
          else if (obj1.status === "approved") {
            list2.push(obj1);
          } else {
            list3.push(obj1);
          }
        }
        context.commit("setPWaitingList2", list1);
        context.commit("setPApprovedList2", list2);
        context.commit("setPRejectedList2", list3);
      });
    },
    async rejectevent(context, { id, date, desc, time }) {
      const dbRef = ref(db);
      get(child(dbRef, "/users/IJoAj50XXvQlPDA7irZHUu2Kz0W2/events/" + id))
        .then((snapshot) => {
          if (snapshot.exists()) {
            update(
              ref(db, "/users/IJoAj50XXvQlPDA7irZHUu2Kz0W2/events/" + id),
              {
                status: "rejected",
              }
            );
          } else {
            get(
              child(dbRef, "/users/TgyYtVBu8NYz2CKjHZYwfFyvktV2/events/" + id)
            ).then((snapshot) => {
              if (snapshot.exists()) {
                update(
                  ref(db, "/users/TgyYtVBu8NYz2CKjHZYwfFyvktV2/events/" + id),
                  {
                    date,
                    desc,
                    id,
                    time,
                    status: "rejected",
                  }
                );
              }
            });
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    async approveevent(context, { id, date, desc, time }) {
      const dbRef = ref(db);
      get(child(dbRef, "/users/IJoAj50XXvQlPDA7irZHUu2Kz0W2/events/" + id))
        .then((snapshot) => {
          if (snapshot.exists()) {
            update(
              ref(db, "/users/IJoAj50XXvQlPDA7irZHUu2Kz0W2/events/" + id),
              {
                status: "approved",
              }
            );
          } else {
            get(
              child(dbRef, "/users/TgyYtVBu8NYz2CKjHZYwfFyvktV2/events/" + id)
            ).then((snapshot) => {
              if (snapshot.exists()) {
                update(
                  ref(db, "/users/TgyYtVBu8NYz2CKjHZYwfFyvktV2/events/" + id),
                  {
                    date,
                    desc,
                    id,
                    time,
                    status: "approved",
                  }
                );
              }
            });
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    async getactiveeventlist(context) {
      const starCountRef = ref(
        db,
        "/users/IJoAj50XXvQlPDA7irZHUu2Kz0W2/events"
      );
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        var list1 = [];
        for (const ele in data) {
          const obj1 = data[ele];
          console.log(obj1.status);
          if (obj1.status === "approved") list1.push(obj1);
        }
        context.commit("setActiveevelist1", list1);
      });
      const starCountRef2 = ref(
        db,
        "/users/TgyYtVBu8NYz2CKjHZYwfFyvktV2/events"
      );
      onValue(starCountRef2, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        var list1 = [];
        for (const ele in data) {
          const obj1 = data[ele];
          console.log(obj1.status);
          if (obj1.status === "approved") list1.push(obj1);
        }
        context.commit("setActiveevelist2", list1);
      });
    },
  },
});

const unsub = onAuthStateChanged(auth, (user) => {
  store.commit("setAuthIsReady", true);
  store.commit("setUser", user);
  unsub();
});

export default store;
