﻿//------------------------------------------------------------------------------
// <auto-generated>
//    此代码是根据模板生成的。
//
//    手动更改此文件可能会导致应用程序中发生异常行为。
//    如果重新生成代码，则将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

namespace JXXZ.ZHCG.DAL
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class OpenMasEntities : DbContext
    {
        public OpenMasEntities()
            : base("name=OpenMasEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public DbSet<COM_MmsIn_2> COM_MmsIn_2 { get; set; }
        public DbSet<COM_MmsReport_2> COM_MmsReport_2 { get; set; }
        public DbSet<COM_MmsSent_2> COM_MmsSent_2 { get; set; }
        public DbSet<COM_SmsIn_2> COM_SmsIn_2 { get; set; }
        public DbSet<COM_SmsReport_2> COM_SmsReport_2 { get; set; }
        public DbSet<COM_SmsSent_2> COM_SmsSent_2 { get; set; }
    }
}
