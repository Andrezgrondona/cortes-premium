// src/services/productService.ts
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

export interface Product {
  nombre: string;
  precio: number;
  descripcion: string;
  urlImage: string;
  presentacion: string;
}

const productCollection = collection(db, "Inventario");

export const addProduct = async (product: Product) => {
  await addDoc(productCollection, product);
};

export const getProducts = async (): Promise<Product[]> => {
  const productSnapshot = await getDocs(productCollection);
  return productSnapshot.docs.map(doc => doc.data() as Product);
};

