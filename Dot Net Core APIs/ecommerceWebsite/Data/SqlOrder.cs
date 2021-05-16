using ecommerceWebsite.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ecommerceWebsite.Data
{
    public class SqlOrder : IOrder
    {
        private readonly CommerceContext _context;
        public SqlOrder(CommerceContext context)
        {
            _context = context;
        }


        public void AddOrder(Order order)  
        {
            if (order == null)
            {
                throw new ArgumentNullException(nameof(order));
            }

            //var item = _context.Carts.FirstOrDefault(x => x.CartId == order.CartId);
            //if (item != null)
            //{
            //    order.Quantity = item.Quantity;
            //    order.Cost = item.Quantity * item.CostPerUnit;
            //    order.OrderDate = DateTime.Now;


            //    _context.Orders.Add(order);
            //    _context.SaveChanges();
            //}
            order.OrderDate = DateTime.Now;
            _context.Orders.Add(order);
            _context.SaveChanges();
        }



        //public void DeleteOrder(Order order)
        //{
        //    if (order == null)
        //    {
        //        throw new ArgumentNullException(nameof(order));
        //    }

        //    _context.Orders.Remove(order);
        //}

        public IEnumerable<Order> Orders()
        {
            return _context.Orders.ToList();
        }

        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }
    }
}
