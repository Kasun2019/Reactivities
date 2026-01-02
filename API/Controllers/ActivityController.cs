using System;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;

public class ActivityController(AppDbContext context) : BaseApiController
{
    // private readonly AppDbContext context;
    // public ActivityController(AppDbContext context)
    // {
    //     this.context = context;
    // }
    [HttpGet]
    public async Task<ActionResult<List<Activity>>> GetActivies()
    {
        
        return await context.Activities.ToListAsync();
    }
    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> GetActivityDetails(string id)
    {
        var activity= await context.Activities.FindAsync(id);

        if (activity == null) return NotFound();

        return activity;

    }
}
