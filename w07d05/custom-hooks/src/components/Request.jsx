import useRequest from "../hooks/useRequest";

const Request = () => {
  const url = 'https://my-json-server.typicode.com/andydlindsay/chef-andy/recipes';

  const {data, loading} = useRequest(url);

  return (
    <div>
      <h2>Request component</h2>

      { loading && <p>spinner...</p> }
      { data && <h2>Num recipes: {data.length}</h2> }
    </div>
  );
};

export default Request;