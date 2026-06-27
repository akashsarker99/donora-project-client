import { Pagination, Table } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const PaginationComponent = ({pageNumber, totalPages, pages, pathName}) => {
    return (
        <div>
              <div className="flex justify-center my-8">
        <Table.Footer>
        <Pagination size="lg">
          <Pagination.Content>
            <Pagination.Item>
              <Pagination.Previous
                isDisabled={pageNumber === 1}
          
              >
                <Link className="flex gap-2" href={`${pathName}?page=${pageNumber-1}`}>
                <Pagination.PreviousIcon />
                Prev</Link>
              </Pagination.Previous>
            </Pagination.Item>

            {pages.map((p) => (
              <Pagination.Item key={p}>
               <Link href={`${pathName}?page=${p}`}>
                <Pagination.Link className={`${p===pageNumber && 'bg-red-500 text-white'}`} isActive={p === pageNumber}>
                  {p}
                </Pagination.Link>
               </Link>
              </Pagination.Item>
            ))}
            <Pagination.Item>
              <Pagination.Next
                isDisabled={pageNumber === totalPages}
              >
                  <Link className="flex gap-2 text-red-500" href={`${pathName}?page=${pageNumber+1}`}>
                Next
                <Pagination.NextIcon />
                </Link>
              </Pagination.Next>
            </Pagination.Item>
          </Pagination.Content>
        </Pagination>
      </Table.Footer>
     </div>
        </div>
    );
};

export default PaginationComponent;