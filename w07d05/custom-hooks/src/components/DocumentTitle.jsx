// import {useEffect} from 'react';
import useDocumentTitle from "../hooks/useDocumentTitle";

const DocumentTitle = () => {
  // const title = 'this is my webpage';

  // useEffect(() => {
  //   document.title = title;
  // }, [title]);

  useDocumentTitle('about us!');

  return (
    <div>
      <h2>Document Title component</h2>
    </div>
  );
};

export default DocumentTitle;
