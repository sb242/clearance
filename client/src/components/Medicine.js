export default function Medicine() {
  const [medicine, setMedicine] = useState([]);

  useEffect(() => {
    const fetchMedicine = async () => {
      const response = await axios("http://localhost:8080/medications");
      const data = await response;
      setMedicine(data.data);
    };
    fetchMedicine();
  }, []);

  return <h1>Hello</h1>;
}
