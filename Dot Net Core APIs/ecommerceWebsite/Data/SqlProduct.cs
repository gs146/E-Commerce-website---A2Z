    using ecommerceWebsite.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ecommerceWebsite.Data
{
    public class SqlProduct : IProduct
    {
        private readonly CommerceContext _context;
        public SqlProduct(CommerceContext context)
        {
            _context = context;
        }

        public void CreateProduct(Product product)
        {
            if (product == null)
                throw new ArgumentNullException(nameof(product));

            _context.Products.Add(product);
            _context.SaveChanges();
        }

        public void DeleteProduct(Product product)
        {
            if (product == null)
                throw new ArgumentNullException(nameof(product));

            _context.Products.Remove(product);
        }

        public IEnumerable<Product> GetAllProduct()
        {
            return _context.Products.ToList();
        }


        
        public IEnumerable<Product> GetProductByCategory(int category_id)
        {
            return _context.Products.Where(x => x.CategoryId== category_id).ToList();
          
        }

        
        public IEnumerable<Product> GetProductByName(string name)
        {
            return _context.Products.Where(x => x.Name == name).ToList();
        }

        public Product GetProductById(int id)
        {
            return _context.Products.FirstOrDefault(x => x.ProductId == id);
        }

        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }

        public void UpdateProduct(int id, Product product)
        {
            if (_context != null)
            {   
                var item = _context.Products.FirstOrDefault(x => x.ProductId == id);
                item.ProductId = id;
                item.Name = product.Name;
                item.Price = product.Price;
                
                item.Description = product.Description;
                item.CategoryId = product.CategoryId;
                //item.Quantity = product.Quantity;

                _context.Products.Update(item);
                 _context.SaveChanges();
            }
        }
    }
}
