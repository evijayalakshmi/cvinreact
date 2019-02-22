﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using cv.DataAccess;

namespace CV.Migrations
{
    [DbContext(typeof(UserContext))]
    partial class UserContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.1.8-servicing-32085")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("cv.DataAccess.User", b =>
                {
                    b.Property<string>("Email")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("CreatedTime");

                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("IsAdmin");

                    b.Property<string>("Name");

                    b.Property<string>("Password");

                    b.HasKey("Email");

                    b.ToTable("user-details");
                });
#pragma warning restore 612, 618
        }
    }
}
