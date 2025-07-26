import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { data, ReportType, TReport } from 'src/data';
@Controller('report/:type')
export class AppController {
  @Get('')
  getAllReports(@Param('type') type: string) {
    if (!(type === ReportType.EXPENSE || type === ReportType.INCOME)) {
      throw new Error('Only Expense or income is acceptable');
    }

    return data.report.filter((d) => {
      if (type == ReportType.EXPENSE) {
        return d.type == ReportType.EXPENSE;
      } else {
        return d.type == ReportType.INCOME;
      }
    });
  }
  @Get(':id')
  getReportById(@Param('type') type: string, @Param('id') id: string) {
    if (!(type === ReportType.EXPENSE || type === ReportType.INCOME)) {
      throw new Error('Only Expense or income is acceptable');
    } 
    const reports = data.report
      .filter((d) => {
        if (type == ReportType.EXPENSE) {
          return d.type == ReportType.EXPENSE;
        } else {
          return d.type == ReportType.INCOME;
        }
      })
      .find((d) => d.id == id);
    return reports;
  }

  @Post()
  createReport(
    @Body() body:Partial<TReport>,@Param("type") type:string
  ) {
    if(!body || !body.amount || !body.source){
      throw new Error("no no ")
    }
 const data:TReport ={
amount:body.amount,
source:body.source,


 }
    
  }
  @Put(':id')
  updateReport() {
    return { message: 'Report updated' };
  }
  @Delete(':id')
  deleteReport() {
    return { message: 'Report deleted' };
  }
}
