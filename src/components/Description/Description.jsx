import Counter from "../Counter/Counter";
import "./style.css";

export default function Description() {
    return (
        <div className="container">
            <div className="content">
                <p className="brand__company mt-5">SNEAKER COMPANY</p>

                <h3 className="title__brand">
                    Fall Limited Edition <br /> Sneakers
                </h3>

                <p className="description text-muted">
                    These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
                </p>

                <div className="price d-flex flex-md-column justify-content-between align-items-center align-items-md-start">
                    <div className="current__price d-flex align-items-center gap-4">
                        $125.00
                        <span className="sale">50%</span>
                    </div>

                    <div className="before__price">
                        $250.00
                    </div>
                </div>

                <Counter />
            </div>
        </div>
    );
}