package com.Teddy.backend.model;
import org.springframework.stereotype.Component;

@Component
public class ValidContributor {
    public boolean isStudentValidId (long id) {
        //Student student =new Student();
        // available for 110~119 students
        int length = 0;
        long arrayname[] = new long[9];
        while (id != 0L) {
            length++;
            arrayname[length-1]=id%10;
            id /= 10;
        }
        if (length != 9) {
            return false;
        }
        else {
        if(arrayname[8]!=1 || arrayname[7]!=1 || arrayname[5]!=3 || arrayname[4]!=0 || arrayname[3]!=6)
        {
            return false;
        }
        }
        return true;
    }

    public boolean isTeacherValidId (String id) {
        //Student student =new Student();
        // available for 110~119 students
        int length = 0;
        String arrayname[] = new String[9];
        arrayname[0]= "Yi Lin Lin";
        arrayname[1]= "JerryTheTeddy Agee";
        arrayname[2]= "Vincent";
        arrayname[3]= "Huang";

        for(int i=0;i<4;i++)
        {
            if(arrayname[i].equals(id))
            {
                return true;
            }
        }
        return false;
    }
}