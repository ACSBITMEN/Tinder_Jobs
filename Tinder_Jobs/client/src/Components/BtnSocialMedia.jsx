import '../Styles/BtnSocialMedia.css';

function BtnSocialMedia () {
  return (
    <div className="mt-4 text-center">
      <p>O inicia sesión con:</p>
      <div className="d-flex justify-content-center">
        <button type="button" className="btn btn-outline-dark btn-login">
          <i className="fa fa-github"></i> Git
        </button>
        <button type="button" className="btn btn-outline-dark btn-login">
          <i className="fa fa-linkedin"></i> LinkedIn
        </button>
        <button type="button" className="btn btn-outline-dark btn-login">
          <i className="fa fa-windows"></i> Office
        </button>
      </div>
    </div>
  );
}

export default BtnSocialMedia;
