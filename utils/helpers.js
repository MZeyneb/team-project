async function getData() {
    try {
      const res = axios.get("http://localhost:3000/users");
      console.log(res.data);
    } catch (error) {}
  }