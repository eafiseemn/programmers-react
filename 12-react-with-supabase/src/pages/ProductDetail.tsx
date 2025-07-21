import { useParams } from '@/router/RouterProvider';
import S from './ProductDetail.module.css';
import { useEffect, useState } from 'react';
import supabase from '@/supabase/supabase';
import type { Tables } from '@/supabase/database.types';

type Product = Tables<'products'>

function ProductDetail() {
  const { id } = useParams();
  const [ product, setProduct ] = useState<Product | null>(null)
  const [ error, setError ] = useState<string | null>(null)
  
  useEffect(()=>{
    const fetchProduct = async () => {
      const { data, error:err } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();

      if(err || !data) {
        console.error(err);
        setError(`해당하는 상품 데이터가 존재하지 않습니다. ${err}}`)
        return;
      }
      setProduct(data);
    }

    fetchProduct();
  }, [id])

  if(!product) return (error ?? <p>해당하는 상품 데이터가 존재하지 않습니다.</p>);

  const realPrice = product.price - product.price * (product.sale * 0.01);
  
  return (
    <div className={S.container}>
      <div className={S.productInfo}>
        <img className={S.image} src={product.image_url} alt={product.name} />
        <div>
          <h2 className={S.name}>{product.name}</h2>
          <p className={S.description}>{product.description}</p>
          <div>
            <span className={product.sale === 0 ? S.finalPrice : S.price}>{product.price.toLocaleString()}원</span>
            <span className={ product.sale === 0 ? `a11y-hidden` : S.sale}>할인율 : {product.sale}%</span>
            <span className={product.sale === 0 ? `a11y-hidden` : S.finalPrice}>{realPrice.toLocaleString()}원</span>
          </div>
        </div>
      </div>
      <div className="buttonGroup">
        <button type="button">수정</button>
        <button type="button">뒤로가기</button>
      </div>
    </div>
  )
}
export default ProductDetail