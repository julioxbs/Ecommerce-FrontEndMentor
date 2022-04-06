import { useSelector, useDispatch } from "react-redux";
import { removeItem } from '../../features/counter/counterSlice';

export default function Cart() {
    const count = useSelector((state) => state.counter.value);
    const isPurchased = useSelector((state) => state.counter.addCart);
    const dispatch = useDispatch();

    return (
        <div className="basket">
            <div className="card" style={{ width: 'max-content', height: 'max-content' }}>
                <div className="card-header bg-white">
                    <p className="card-title fw-bold m-0">Cart</p>
                </div>

                {isPurchased && count > 0 ?
                    <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between gap-3">
                            <img style={{width: '50px', borderRadius: '5px'}} src="/images/image-product-1-thumbnail.jpg" alt="" />

                            <div>
                                <p className="p-0 m-0 text-muted">Autumn Limited Edition...</p>
                                <p className="text-muted">
                                    $125.00 x {count} <span className="fw-bold count__price">${count * 375.00}.00</span>
                                </p>
                            </div>

                            <a href="#" onClick={() => dispatch(removeItem())}>
                                <img src="/images/icon-delete.svg" alt="icon del" />
                            </a>
                        </div>
                    </div>

                    :

                    <div className="card-body d-flex align-items-center justify-content-center">
                        <p className="text-muted fw-bold">Your cart is empty</p>
                    </div>
                }
            </div>
        </div>
    );
}