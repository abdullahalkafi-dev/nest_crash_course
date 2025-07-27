import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { data, ReportType, TReport } from 'src/data';
import { v4 as uuid } from 'uuid';
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
    const report = data.report
      .filter((d) => {
        if (type == ReportType.EXPENSE) {
          return d.type == ReportType.EXPENSE;
        } else {
          return d.type == ReportType.INCOME;
        }
      })
      .find((d) => d.id == id);
    return report;
  }

  @Post()
  createReport(
    @Body() body: Partial<TReport>,
    @Param('type') type: 'income' | 'expense',
  ) {
    if (!body || !body.amount || !body.source) {
      throw new Error('no no ');
    }
    const info: TReport = {
      id: uuid(),
      amount: body.amount,
      source: body.source,
      created_at: new Date(),
      updated_at: new Date(),
      type: type,
    };
    data.report.push(info);
    return info;
  }
  @Put(':id')
  updateReport(
    @Param('id') id: string,
    @Param('type') type: 'income' | 'expense',
    @Body() body: Partial<TReport>,
  ) {
    if (!(type === ReportType.EXPENSE || type === ReportType.INCOME)) {
      throw new Error('Only Expense or income is acceptable');
    }
    const report = data.report
      .filter((d) => {
        if (type == ReportType.EXPENSE) {
          return d.type == ReportType.EXPENSE;
        } else {
          return d.type == ReportType.INCOME;
        }
      })
      .find((d) => d.id == id);
      console.log(report);
    if (!report) {
      return 'No data Found';
    }
   const index =data.report.findIndex(d=>d.id ==report.id)
   data.report[index]={...data.report[index],...body}
   return data.report[index]
  }
  @Delete(':id')
  deleteReport() {
    return { message: 'Report deleted' };
  }
}
