import type { Tables } from "@/supabase/database.types";
// import type { Database } from "@/supabase/database.types";
import supabase from "@/supabase/supabase";
import { useEffect, useState } from "react";

// type Product = Database['public']['Tables']['products']['Insert'];
type Product = Omit<Tables<'products'>,'created_at'>;

function useProducts() {
  
  const [ products, setProducts ] = useState<Product[] | null>(null);
  const [ loading, setLoading ] = useState<boolean>(true);

  useEffect(()=>{
    const fetchProducts = async () => {
      const { data, error } = await supabase
      .from('products')
      .select('id, name, price, image_url, description, sale');

      if(error) {
        console.error('상품 가져오기 실패');
        return null;
      }

      if(data) {
        setProducts(data);
        setLoading(false);
      }
    }
    
    fetchProducts();

  }, []);

  return { products, loading };
}

export default useProducts;