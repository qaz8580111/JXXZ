//------------------------------------------------------------------------------
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
    using System.Collections.Generic;
    
    public partial class case_phases
    {
        public case_phases()
        {
            this.case_workflowdetails = new HashSet<case_workflowdetails>();
        }
    
        public int phaseid { get; set; }
        public string phasename { get; set; }
        public string wfid { get; set; }
        public Nullable<int> seq { get; set; }
    
        public virtual ICollection<case_workflowdetails> case_workflowdetails { get; set; }
    }
}
