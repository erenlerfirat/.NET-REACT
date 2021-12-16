using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.Activities
{
    public class List
    {
        public class Query : IRequest<Result<List<Activity>>> { }
        public class Handler : IRequestHandler<Query, Result<List<Activity>>>
        {
            private readonly DataContext _context;
            

            public Handler(DataContext context)
            {
                _context = context;
               
            }
            //cancelletion token stops the process of a request , it tells to server to stop processing that request
            public async Task<Result<List<Activity>>> Handle(Query request, CancellationToken cancellationToken)
            {    
                return Result < List < Activity >>.Success(await _context.Activities.ToListAsync());
            }
        }
    }
}