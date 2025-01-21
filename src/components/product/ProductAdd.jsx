const ProductAdd = () => {
  return (
    <div>
      <Form.Group controlId="formProductName" className="mb-3">
        <Form.Label>Ürün ismi</Form.Label>
        <Form.Control type="text" placeholder="Ürün ismini girin" />
      </Form.Group>

      <Form.Group controlId="formPrice" className="mb-3">
        <Form.Label>Fiyat</Form.Label>
        <Form.Control type="text" placeholder="Fiyat girin" />
      </Form.Group>

      <Form.Group controlId="formLastName" className="mb-3">
        <Form.Label>Açıklama</Form.Label>
        <Form.Control type="text" placeholder="Soyadınızı girin" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Gönder
      </Button>
    </div>
  );
};
export default ProductAdd;
