import React, { useState } from 'react';
import {QrReader} from 'react-qr-reader';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const ExpenseQRScanner = () => {
  const [result, setResult] = useState(null);

  const handleScan = (data) => {
    if (data) {
      setResult(data);
      // toast.success('QR Code scanned successfully!', {
      //   position: toast.POSITION.TOP_CENTER,
      // });
    }
  };

  const handleError = (error) => {
    console.error('QR Scan Error:', error);
    // toast.error('Failed to scan QR Code. Please try again.', {
    //   position: toast.POSITION.TOP_CENTER,
    // });
  };

  return (
    <div>
      <h2>Expense QR Scanner</h2>
      {/* <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      /> */}
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            console.log(result?.text);
            handleScan(result?.text);
          }

          if (!!error) {
            console.info(error);
            handleError(error);
          }
        }}
        style={{ width: '100%' }}
      />
      <p>Scan a QR code containing expense data.</p>
      {result && (
        <div>
          <h3>Expense Details</h3>
          <p>{result}</p>
        </div>
      )}
      {/* <ToastContainer /> */}
    </div>
  );
};

export default ExpenseQRScanner;


// import React, { useState } from 'react';
// import { QrReader } from 'react-qr-reader';

// const Test = (props) => {
//   const [data, setData] = useState('No result');

//   return (
    // <>
    //   <QrReader
    //     onResult={(result, error) => {
    //       if (!!result) {
    //         setData(result?.text);
    //       }

    //       if (!!error) {
    //         console.info(error);
    //       }
    //     }}
    //     style={{ width: '100%' }}
    //   />
//       <p>{data}</p>
//     </>
//   );
// };