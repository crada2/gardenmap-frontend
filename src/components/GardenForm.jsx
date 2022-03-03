const GardenForm = () => {
  return (
    <div className="background">
      <div className="container">
        <div className="container-title">
          <legend>Tell us about you</legend>
        </div>
        <div className="container-content">
          <form className="content">
            <div className="row">
              <label htmlFor="name">Name</label>
              <input type="text" placeholder="What is your name?" />
            </div>
            <div className="row">
              <label htmlFor="surname">Surname</label>
              <input type="text" placeholder="And your last name?" />
            </div>
            <div className="row">
              <label htmlFor="location">Location</label>
              <input type="text" placeholder="Where is your garden?" />
            </div>
            <div className="row">
              <label htmlFor="email">Email</label>
              <input type="text" placeholder="What is your e-mail??" />
            </div>
            <div className="row">
              <label htmlFor="services">Offers</label>
              <input type="text" placeholder="What do you want to offer?" />
            </div>
          </form>
          <button>Join the garden family!</button>
        </div>
      </div>
    </div>
  );
};

export default GardenForm;
