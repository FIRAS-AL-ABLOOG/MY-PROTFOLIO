import "./NameAndEmage.css";

const NameAndEmage = () => {
  return (
    <div className="name-and-emage">

      {/* الاسم الأول */}
      <div className="first-name">
        FIRAS
      </div>

      {/* صورة الشخصية */}
      <div className="emage">
        <img
          src="/images/me2.png"
          alt="Firas Al-Abloog"
        />
      </div>

      {/* الكنية */}
      <div className="last-name">
        AL-ABLOOG
      </div>

    </div>
  );
};

export default NameAndEmage;